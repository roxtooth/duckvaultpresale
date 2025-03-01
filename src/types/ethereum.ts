// src/types/ethereum.ts
export interface EthereumProvider {
    request(args: { method: string; params?: unknown[] }): Promise<unknown>;
  }
  