import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (_, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property not found", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
};
