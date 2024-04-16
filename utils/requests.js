const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
export async function fetchProperties() {
  try {
    // Handle the case where API_DOMAIN is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, {
      next: { revalidate: 120 },
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();
  } catch (error) {
    console.log(error);

    return [];
  }
}

// Fetch property by ID
export async function fetchProperty(id) {
  try {
    // Handle the case where API_DOMAIN is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      next: { revalidate: 120 },
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch property");
    }

    return res.json();
  } catch (error) {
    console.log(error);

    return null;
  }
}
