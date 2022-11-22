export {};

declare global {
  interface Window {
    api: {
      invoke: (channel: string, data?: any) => Promise<any>;
    };
  }
}
