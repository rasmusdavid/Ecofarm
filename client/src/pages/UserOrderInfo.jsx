import OrderHistoria from "../components/OrderHistoria";
import OrderInfoCard from "../components/OrderInfoCard";

export default () => {
  return (
    <>
      <h1 className="text-center g-4">Order info</h1>

      <OrderInfoCard />
      <OrderInfoCard />
      <OrderHistoria />
    </>
  );
};
