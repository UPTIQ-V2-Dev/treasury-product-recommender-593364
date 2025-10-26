import { useState, useCallback } from 'react';
import { emitter } from '@/agentSdk';

interface UseAgentCallOptions {
    agentId: string;
    event: string;
    onSuccess?: (data: any) => void;
    onError?: (error: Error) => void;
}

interface AgentCallState {
    isLoading: boolean;
    error: string | null;
    data: any;
}

export const useAgentCall = ({ agentId, event, onSuccess, onError }: UseAgentCallOptions) => {
    const [state, setState] = useState<AgentCallState>({
        isLoading: false,
        error: null,
        data: null
    });

    const execute = useCallback(
        async (
            payload?: any,
            documents?: Array<{
                signedUrl: string;
                fileName?: string;
                mimeType?: string;
            }>
        ) => {
            setState(prev => ({ ...prev, isLoading: true, error: null }));

            try {
                const response = await emitter.emit({
                    agentId,
                    event,
                    payload,
                    documents
                });

                setState(prev => ({ ...prev, data: response, isLoading: false }));
                onSuccess?.(response);
                return response;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Agent call failed';
                setState(prev => ({ ...prev, error: errorMessage, isLoading: false }));
                onError?.(error instanceof Error ? error : new Error(errorMessage));
                throw error;
            }
        },
        [agentId, event, onSuccess, onError]
    );

    const reset = useCallback(() => {
        setState({ isLoading: false, error: null, data: null });
    }, []);

    return {
        ...state,
        execute,
        reset
    };
};
