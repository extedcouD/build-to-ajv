// export interface ENUM_TYPE {}
export interface BUID_TYPE {
  paths: {
    [key: string]: {
      post: {
        description: string;
        requestBody: {
          content: {
            "application/json": {
              schema: any;
            };
          };
        };
      };
    };
  };
  "x-enum": any;
}
