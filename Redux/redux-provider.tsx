"use client";
import { Provider } from "react-redux";
import { store } from "./store";

interface IProvideProps {
  children: React.ReactNode;
}
const ReduxProvider: React.FunctionComponent<IProvideProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
