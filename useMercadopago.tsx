import * as React from "react";

export function useMercadopago(
  publicKey: string,
  optionsmp?: { locale: "es-AR" }
): any {
  const [mp, setMP] = React.useState<any>(null);

  if (!publicKey) throw new Error("MercadoPago public key is required");

  if (!optionsmp) optionsmp = { locale: "es-AR" };

  React.useEffect(() => {
    if (mp) return;
    const script: HTMLScriptElement = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.onload = () => {
      setMP(new (window as any).MercadoPago(publicKey, optionsmp));
    };
    script.onerror = () => {
      throw new Error("MercadoPago script failed to load");
    };
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return mp;
}
