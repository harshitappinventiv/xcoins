import GooglePayButton from "@google-pay/button-react";

function GooglePay() {
  return (
    <div>
      <h1>Google pay </h1>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1",
            currencyCode: "INR",
            countryCode: "IN",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Success", paymentRequest);
        }}
        // onPaymentAuthorized={() => ({
        //   transactionState: "SUCCESS",
        // })}
        // onPaymentDataChanged={(paymentData) => {
        //   if (paymentData.shippingAddress?.countryCode === "US") {
        //     return {
        //       error: {
        //         reason: "SHIPPING_ADDRESS_UNSERVICEABLE",
        //         message: "Cannot ship to the United States of America",
        //         intent: "SHIPPING_ADDRESS",
        //       },
        //     };
        //   }
        //   return {};
        // }}
        existingPaymentMethodRequired={false}
        buttonColor="default"
        buttonType="buy"
      />
    </div>
  );
}

export default GooglePay;
