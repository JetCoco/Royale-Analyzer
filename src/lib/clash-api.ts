export async function fetchPlayerByTag(tag: string) {
    const token = process.env.NEXT_PUBLIC_CLASH_API_TOKEN;
  
    const response = await fetch(`https://api.clashroyale.com/v1/players/%23${tag}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });
  
    if (!response.ok) {
      throw new Error('Jugador no encontrado o error en la API');
    }
  
    return await response.json();
  }
  