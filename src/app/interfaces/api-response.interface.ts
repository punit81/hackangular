export interface ApiResponse {
    response: ResponseItem[];
  }
  
   
  
  export interface ResponseItem {
    row: RowItem[];
  }
  
   
  
  export interface RowItem {
    name: string;
    value: string;
  }