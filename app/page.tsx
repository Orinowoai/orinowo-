export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>Choose a plan below:</p>
      <ul className="mt-4 space-y-2">
        <li>£49.99 – <a href="https://buy.stripe.com/9B6fZgdF28jbdw5gPk4Rq00" className="text-blue-600 underline">Buy Now</a></li>
        <li>£19.99 – <a href="https://buy.stripe.com/test_12345" className="text-blue-600 underline">Buy Now</a></li>
      </ul>
    </main>
  );
}
