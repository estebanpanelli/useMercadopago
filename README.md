# React Hook useMercadopago para incorporar el Checkout SDK de Mercadopago

## Uso

Para incorporar el SDK y mostrar un botón de pago en React:

```
  const MercadoPago = useMercadopago(
    "Tu APP_USR-uid",
    { locale: "es-AR" }
  );
```

Luego 

```
  useEffect(() => {
    if (MercadoPago === null || PreferenceID === null) return;

    MercadoPago.checkout({
      preference: {
        id: PreferenceID
      },
      render: {
        container: ".mercadopago-container",
        label: "Pagar con MercadoPago"
      }
    });
  }, [MercadoPago, PreferenceID]);
```

El PreferenceId tiene que ser obtenido desde el servidor el cual se genera con la `clave secreta`.
