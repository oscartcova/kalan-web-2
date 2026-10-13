// Esta función corre en el servidor de Netlify, nunca en el navegador del usuario.
// Por eso es el único lugar donde es seguro usar la llave de la IA.
// Netlify AI Gateway inyecta ANTHROPIC_API_KEY y ANTHROPIC_BASE_URL automáticamente;
// si configuras tu propia ANTHROPIC_API_KEY, se usa esa.
export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Método no permitido." }, { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Falta configurar la llave ANTHROPIC_API_KEY en Netlify." },
      { status: 500 }
    );
  }

  const baseUrl = (process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com").replace(/\/$/, "");

  try {
    const body = await req.text();
    const response = await fetch(`${baseUrl}/v1/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body,
    });

    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch (err) {
    return Response.json({ error: "Error al conectar con la IA." }, { status: 500 });
  }
};

export const config = {
  path: "/api/analyze",
};
