// types.ts

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles: string[]; // e.g., ["admin", "user", "editor"]
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
  userAgent: string;
  ipAddress: string;
}

export interface TokenPayload {
  userId: string;
  email: string;
  roles: string[];
  sessionId: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface RefreshTokenPayload {
  sessionId: string;
  userId: string;
}

export interface JWTPayload {
  sub: string; // Subject (user ID)
  email: string;
  roles: string[];
  sessionId: string;
  iat: number; // Issued at (timestamp)
  exp: number; // Expiration time (timestamp)
}

export interface AuthGatewayConfig {
  jwtSecret: string;
  jwtExpiration: string; // e.g., "15m", "1h", "7d"
  refreshTokenExpiration: string; // e.g., "7d", "30d"
  bcryptSaltRounds: number;
  databaseUrl: string;
  serviceUrls: {
    userManagement: string;
    // Add other service URLs as needed
  };
  cors: {
    origin: string | string[];
    methods: string[];
    allowedHeaders: string[];
  };
}

export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number; // HTTP status code
}

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[]; // e.g., ["read:users", "write:users"]
  createdAt: Date;
  updatedAt: Date;
}

export enum AuthProvider {
  LOCAL = "local",
  GOOGLE = "google",
  // Add other providers as needed
}

export interface ExternalAuthProvider {
  provider: AuthProvider;
  providerId: string;
  // Add other provider-specific fields as needed
}