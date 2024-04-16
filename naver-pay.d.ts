// Naver 타입 선언
interface NaverPay {
  create(config: {
    mode: string;
    clientId: string;
    chainId: string;
  }): NaverPayInstance;
}

interface NaverPayInstance {
  open(config: {
    merchantUserKey: string;
    merchantPayKey: string;
    productName: string;
    totalPayAmount: string;
    taxScopeAmount: string;
    taxExScopeAmount: string;
    returnUrl: string;
  }): void;
}

// window 객체 확장
declare global {
  interface Window {
    Naver: {
      Pay: NaverPay;
    };
  }
}
