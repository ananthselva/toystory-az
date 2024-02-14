// Stripe.js
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_DIodJvzwckwG0omwLcjh3E2k00A880PBDB");

export default stripePromise;
