import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// This would connect to the MongoDB database in a real application
// For now, we'll use a simple cookie-based cart

export async function GET() {
  const cartCookie = cookies().get("buildmart-cart");

  if (!cartCookie) {
    return NextResponse.json({ items: [] });
  }

  try {
    const cart = JSON.parse(cartCookie.value);
    return NextResponse.json(cart);
  } catch (error) {
    // If cookie is invalid, return an empty cart
    return NextResponse.json({ items: [] });
  }
}

export async function POST(req: Request) {
  try {
    const { productId, quantity, sellerId } = await req.json();

    // Validate input
    if (!productId || !quantity || !sellerId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get existing cart or create new one
    const cartCookie = cookies().get("buildmart-cart");
    let cart = { items: [] };

    if (cartCookie) {
      try {
        cart = JSON.parse(cartCookie.value);
      } catch (error) {
        // If cookie is invalid, create a new cart
        cart = { items: [] };
      }
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      (item: any) => item.productId === productId && item.sellerId === sellerId
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      // cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item if it doesn't exist
      // cart.items.push({
      //   productId,
      //   sellerId,
      //   quantity
      // });
    }

    // Store updated cart in cookie
    cookies().set({
      name: "buildmart-cart",
      value: JSON.stringify(cart),
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    console.error("Cart error:", error);
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { productId, sellerId } = await req.json();

    // Validate input
    if (!productId || !sellerId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get existing cart
    const cartCookie = cookies().get("buildmart-cart");
    if (!cartCookie) {
      return NextResponse.json({
        success: true,
        message: "Cart is already empty",
        cart: { items: [] },
      });
    }

    let cart;
    try {
      cart = JSON.parse(cartCookie.value);
    } catch (error) {
      return NextResponse.json({
        success: true,
        message: "Cart is already empty",
        cart: { items: [] },
      });
    }

    // Remove item from cart
    cart.items = cart.items.filter(
      (item: any) =>
        !(item.productId === productId && item.sellerId === sellerId)
    );

    // Store updated cart in cookie
    cookies().set({
      name: "buildmart-cart",
      value: JSON.stringify(cart),
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Item removed from cart",
      cart,
    });
  } catch (error) {
    console.error("Cart error:", error);
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}
