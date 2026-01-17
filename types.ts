// types.ts

import { DocumentDefinition } from '@typegoose/typegoose/lib/defaultTypes';

export interface IApiServiceConfig {
  port: number;
  secretKey: string;
  databaseUrl: string;
}

export interface IQueryParams {
  limit?: number;
  skip?: number;
  sort?: string;
  [key: string]: any;
}

export interface ICreateUser {
  email: string;
  password: string;
  name: string;
}

export interface IUpdateUser {
  email?: string;
  password?: string;
  name?: string;
}

export interface IQueryUser {
  _id: string;
  email: string;
}

export interface IQueryUserResult {
  email: string;
  name: string;
  _id: string;
}

export interface IQueryUsersResult {
  results: IQueryUserResult[];
  count: number;
}

export interface IQueryUserResponse {
  user: IQueryUserResult;
}

export interface IQueryUsersResponse {
  result: IQueryUsersResult;
}

export interface IQueryPaginatedUsersResponse {
  result: IQueryUsersResult;
  pagination: {
    limit: number;
    skip: number;
    total: number;
  };
}

export interface IQueryPaginatedUsers {
  limit: number;
  skip: number;
  query: IQueryParams;
}

export interface IQueryPaginatedUsersResult {
  results: IQueryUserResult[];
  count: number;
}

export interface IQueryPaginatedUserResult {
  result: IQueryUserResult;
}

export interface IQueryPaginatedUserResponse {
  result: IQueryPaginatedUserResult;
  pagination: {
    limit: number;
    skip: number;
    total: number;
  };
}

export interface IQueryPaginatedUser {
  limit: number;
  skip: number;
  query: IQueryParams;
}