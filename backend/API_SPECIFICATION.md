# API SPECIFICATION

## Database Models

```prisma
model User {
  id              Int      @id @default(autoincrement())
  email           String   @unique
  name            String?
  password        String
  role            String   @default("USER")
  isEmailVerified Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  tokens          Token[]
  statements      BankStatement[]
  analyses        AnalysisResult[]
}

model Token {
  id          Int       @id @default(autoincrement())
  token       String
  type        String
  expires     DateTime
  blacklisted Boolean   @default(false)
  createdAt   DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
  userId      Int
}

model BankStatement {
  id               String   @id @default(cuid())
  filename         String
  uploadedAt       DateTime @default(now())
  fileSize         Int
  bankName         String?
  accountType      String?
  statementPeriod  Json
  processingStatus String   @default("PENDING")
  user             User     @relation(fields: [userId], references: [id])
  userId           Int
  analyses         AnalysisResult[]
}

model AnalysisResult {
  id                  String        @id @default(cuid())
  statementId         String
  analysisDate        DateTime      @default(now())
  financialInsights   Json
  recommendations     Json
  riskProfile         String
  liquidityCoverage   Float
  averageBalance      Float
  cashFlowVolatility  Float
  user                User          @relation(fields: [userId], references: [id])
  userId              Int
  statement           BankStatement @relation(fields: [statementId], references: [id])
}

model TreasuryProduct {
  id              String @id @default(cuid())
  name            String
  category        String
  description     String
  minInvestment   Float
  expectedReturn  Float
  riskLevel       String
  tenure          String
  features        Json
  eligibility     Json
  documents       Json
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model SupportedFormat {
  id          Int    @id @default(autoincrement())
  extension   String
  mimeType    String
  description String
}
```

---

EP: POST /auth/register
DESC: Register as user with client type and company information.
IN: body:{name:str!, email:str!, password:str!, clientType:str!, companyName:str, phone:str, agreeToTerms:bool!}
OUT: 201:{user:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:{access:{token:str, expires:str}, refresh:{token:str, expires:str}}}
ERR: {"400":"Invalid input, missing required fields or duplicate email", "422":"Password must be at least 8 characters with one number and letter", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/register -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","password":"password1","clientType":"INDIVIDUAL","agreeToTerms":true}'
EX_RES_201: {"user":{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":false,"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:00:00Z"},"tokens":{"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-26T10:15:00Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-02T10:00:00Z"}}}

---

EP: POST /auth/login
DESC: Login with email and password to receive authentication tokens.
IN: body:{email:str!, password:str!}
OUT: 200:{user:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:{access:{token:str, expires:str}, refresh:{token:str, expires:str}}}
ERR: {"401":"Invalid email or password", "400":"Invalid input format", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"password1"}'
EX_RES_200: {"user":{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:00:00Z"},"tokens":{"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-26T10:15:00Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-02T10:00:00Z"}}}

---

EP: POST /auth/logout
DESC: Logout user by blacklisting the refresh token.
IN: body:{refreshToken:str!}
OUT: 204:{}
ERR: {"404":"Refresh token not found", "400":"Invalid token format", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/logout -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}'
EX_RES_204: {}

---

EP: POST /auth/refresh-tokens
DESC: Refresh authentication tokens using refresh token.
IN: body:{refreshToken:str!}
OUT: 200:{access:{token:str, expires:str}, refresh:{token:str, expires:str}}
ERR: {"401":"Invalid or expired refresh token", "400":"Invalid token format", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/refresh-tokens -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}'
EX_RES_200: {"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-26T10:15:00Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-02T10:00:00Z"}}

---

EP: POST /auth/forgot-password
DESC: Send password reset email to user's email address.
IN: body:{email:str!}
OUT: 204:{}
ERR: {"404":"User not found with provided email", "400":"Invalid email format", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/forgot-password -H "Content-Type: application/json" -d '{"email":"john@example.com"}'
EX_RES_204: {}

---

EP: POST /auth/reset-password
DESC: Reset user password using reset token from email.
IN: query:{token:str!}, body:{password:str!}
OUT: 204:{}
ERR: {"401":"Invalid or expired reset token", "400":"Password must be at least 8 characters", "500":"Internal server error"}
EX_REQ: curl -X POST "/auth/reset-password?token=resetToken123" -H "Content-Type: application/json" -d '{"password":"newPassword1"}'
EX_RES_204: {}

---

EP: POST /auth/verify-email
DESC: Verify user's email address using verification token.
IN: query:{token:str!}
OUT: 204:{}
ERR: {"401":"Invalid or expired verification token", "400":"Invalid token format", "500":"Internal server error"}
EX_REQ: curl -X POST "/auth/verify-email?token=verificationToken123"
EX_RES_204: {}

---

EP: POST /auth/send-verification-email
DESC: Send email verification link to authenticated user.
IN: headers:{Authorization:str!}
OUT: 204:{}
ERR: {"401":"Authentication required", "400":"Email already verified", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/send-verification-email -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_204: {}

---

EP: POST /users
DESC: Create a new user (admin only).
IN: headers:{Authorization:str!}, body:{name:str!, email:str!, password:str!, role:str!}
OUT: 201:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input or duplicate email", "401":"Authentication required", "403":"Admin access required", "500":"Internal server error"}
EX_REQ: curl -X POST /users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"Jane Smith","email":"jane@example.com","password":"password1","role":"USER"}'
EX_RES_201: {"id":2,"email":"jane@example.com","name":"Jane Smith","role":"USER","isEmailVerified":false,"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:00:00Z"}

---

EP: GET /users
DESC: Get paginated list of all users with optional filtering.
IN: headers:{Authorization:str!}, query:{name:str, role:str, sortBy:str, limit:int, page:int}
OUT: 200:{results:arr[obj], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Authentication required", "403":"Admin access required", "400":"Invalid query parameters", "500":"Internal server error"}
EX_REQ: curl -X GET "/users?page=1&limit=10&role=USER" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"results":[{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:00:00Z"}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

EP: GET /users/{userId}
DESC: Get specific user by ID (own profile or admin access).
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 200:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"401":"Authentication required", "403":"Access denied", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X GET /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:00:00Z"}

---

EP: PATCH /users/{userId}
DESC: Update user information (own profile or admin access).
IN: headers:{Authorization:str!}, params:{userId:int!}, body:{name:str, email:str, password:str}
OUT: 200:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input or duplicate email", "401":"Authentication required", "403":"Access denied", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X PATCH /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"John Updated"}'
EX_RES_200: {"id":1,"email":"john@example.com","name":"John Updated","role":"USER","isEmailVerified":true,"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:05:00Z"}

---

EP: DELETE /users/{userId}
DESC: Delete user account (own account or admin access).
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 204:{}
ERR: {"401":"Authentication required", "403":"Access denied", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_204: {}

---

EP: POST /mcp
DESC: Handle MCP (Model Context Protocol) requests with authentication.
IN: headers:{Authorization:str!}, body:{method:str!, params:obj}
OUT: 200:{result:obj}
ERR: {"401":"Authentication required", "400":"Invalid MCP request format", "500":"Internal server error"}
EX_REQ: curl -X POST /mcp -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"method":"initialize","params":{}}'
EX_RES_200: {"result":{"capabilities":{},"protocolVersion":"2024-11-05"}}

---

EP: GET /mcp
DESC: Handle MCP GET requests for retrieving resources.
IN: headers:{Authorization:str!}, query:{method:str, params:str}
OUT: 200:{result:obj}
ERR: {"401":"Authentication required", "400":"Invalid MCP request", "500":"Internal server error"}
EX_REQ: curl -X GET "/mcp?method=list_resources" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"result":{"resources":[]}}

---

EP: DELETE /mcp
DESC: Handle MCP DELETE requests for cleanup operations.
IN: headers:{Authorization:str!}, body:{method:str!, params:obj}
OUT: 200:{result:obj}
ERR: {"401":"Authentication required", "400":"Invalid MCP request", "500":"Internal server error"}
EX_REQ: curl -X DELETE /mcp -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"method":"cleanup","params":{}}'
EX_RES_200: {"result":{"success":true}}

---

EP: GET /statements/formats
DESC: Get list of supported file formats for bank statement upload.
IN: headers:{Authorization:str!}
OUT: 200:arr[{extension:str, mimeType:str, description:str}]
ERR: {"401":"Authentication required", "500":"Internal server error"}
EX_REQ: curl -X GET /statements/formats -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: [{"extension":".pdf","mimeType":"application/pdf","description":"PDF Bank Statements"},{"extension":".csv","mimeType":"text/csv","description":"CSV Transaction Files"},{"extension":".xlsx","mimeType":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","description":"Excel Bank Statements"}]

---

EP: POST /statements/upload
DESC: Upload bank statement file for processing and analysis.
IN: headers:{Authorization:str!}, body:multipart/form-data{file:file!}
OUT: 201:{id:str, filename:str, uploadedAt:str, fileSize:int, bankName:str, accountType:str, statementPeriod:{startDate:str, endDate:str}, processingStatus:str}
ERR: {"400":"Invalid file format or missing file", "401":"Authentication required", "413":"File too large", "500":"Internal server error"}
EX_REQ: curl -X POST /statements/upload -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -F "file=@bank-statement.pdf"
EX_RES_201: {"id":"stmt-123","filename":"bank-statement.pdf","uploadedAt":"2025-10-26T10:00:00Z","fileSize":1024000,"bankName":"Chase Bank","accountType":"Business Checking","statementPeriod":{"startDate":"2024-03-01","endDate":"2024-03-31"},"processingStatus":"PENDING"}

---

EP: GET /analysis/{analysisId}/status
DESC: Get current status of statement analysis processing.
IN: headers:{Authorization:str!}, params:{analysisId:str!}
OUT: 200:{id:str, status:str, progress:int, currentStep:str, error:str}
ERR: {"401":"Authentication required", "404":"Analysis not found", "403":"Access denied", "500":"Internal server error"}
EX_REQ: curl -X GET /analysis/analysis-123/status -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"analysis-123","status":"PROCESSING","progress":75,"currentStep":"Generating recommendations","error":null}

---

EP: GET /analysis/{analysisId}
DESC: Get complete analysis results with financial insights and recommendations.
IN: headers:{Authorization:str!}, params:{analysisId:str!}
OUT: 200:{id:str, statementId:str, analysisDate:str, financialInsights:arr[obj], recommendations:arr[obj], riskProfile:str, liquidityCoverage:float, averageBalance:float, cashFlowVolatility:float}
ERR: {"401":"Authentication required", "404":"Analysis not found", "403":"Access denied", "400":"Analysis not completed", "500":"Internal server error"}
EX_REQ: curl -X GET /analysis/analysis-123 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"analysis-123","statementId":"stmt-123","analysisDate":"2025-10-26T10:00:00Z","financialInsights":[{"id":"insight-1","type":"CASH_FLOW","title":"Strong Monthly Cash Flow","description":"Consistent positive cash flow","value":"$15,000","trend":"UP","impact":"POSITIVE"}],"recommendations":[{"id":"rec-1","productId":"prod-1","score":92,"reasoning":"Optimal liquidity management","recommendedAmount":100000}],"riskProfile":"LOW","liquidityCoverage":85,"averageBalance":125000,"cashFlowVolatility":15}

---

EP: POST /analysis/{analysisId}/retry
DESC: Retry failed analysis processing for a statement.
IN: headers:{Authorization:str!}, params:{analysisId:str!}
OUT: 200:{id:str, status:str, progress:int, currentStep:str}
ERR: {"401":"Authentication required", "404":"Analysis not found", "403":"Access denied", "400":"Analysis not in failed state", "500":"Internal server error"}
EX_REQ: curl -X POST /analysis/analysis-123/retry -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"analysis-123","status":"PROCESSING","progress":0,"currentStep":"Initializing analysis"}

---

EP: POST /recommendations/{recommendationId}/contact
DESC: Submit contact request for treasury product recommendation.
IN: headers:{Authorization:str!}, params:{recommendationId:str!}, body:{message:str, preferredContact:str!}
OUT: 200:{success:bool, message:str}
ERR: {"401":"Authentication required", "404":"Recommendation not found", "403":"Access denied", "400":"Invalid contact preference", "500":"Internal server error"}
EX_REQ: curl -X POST /recommendations/rec-1/contact -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"message":"Interested in this product","preferredContact":"EMAIL"}'
EX_RES_200: {"success":true,"message":"Your request has been submitted. A representative will contact you within 24 hours."}

---

EP: GET /products
DESC: Get list of available treasury products with filtering options.
IN: headers:{Authorization:str!}, query:{category:str, riskLevel:str, minInvestment:float, sortBy:str, limit:int, page:int}
OUT: 200:{results:arr[{id:str, name:str, category:str, description:str, minInvestment:float, expectedReturn:float, riskLevel:str, tenure:str, features:arr[str], eligibility:arr[str], documents:arr[str]}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Authentication required", "400":"Invalid query parameters", "500":"Internal server error"}
EX_REQ: curl -X GET "/products?category=SAVINGS&limit=10" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"results":[{"id":"prod-1","name":"High-Yield Business Savings","category":"SAVINGS","description":"Competitive interest rates","minInvestment":10000,"expectedReturn":4.5,"riskLevel":"LOW","tenure":"No fixed term","features":["No monthly fees","24/7 online access"],"eligibility":["Business account required"],"documents":["Business license"]}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

EP: GET /products/{productId}
DESC: Get detailed information about a specific treasury product.
IN: headers:{Authorization:str!}, params:{productId:str!}
OUT: 200:{id:str, name:str, category:str, description:str, minInvestment:float, expectedReturn:float, riskLevel:str, tenure:str, features:arr[str], eligibility:arr[str], documents:arr[str], createdAt:str, updatedAt:str}
ERR: {"401":"Authentication required", "404":"Product not found", "500":"Internal server error"}
EX_REQ: curl -X GET /products/prod-1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"prod-1","name":"High-Yield Business Savings","category":"SAVINGS","description":"Earn competitive interest rates","minInvestment":10000,"expectedReturn":4.5,"riskLevel":"LOW","tenure":"No fixed term","features":["No monthly fees","24/7 online access","FDIC insured"],"eligibility":["Business account required","Minimum balance $10,000"],"documents":["Business license","Tax ID number"],"createdAt":"2025-10-26T10:00:00Z","updatedAt":"2025-10-26T10:00:00Z"}