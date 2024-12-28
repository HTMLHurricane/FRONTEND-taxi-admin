import { Button, Result } from "antd";
import useNetwork from "@/hooks/useNetwork";
import { Router } from "@/app/router";
import "./style/app.css";
import { useCheckUserQuery } from "@/utils/api/auth/api";

const App = () => {
  const { isOnline: isNetwork } = useNetwork();
  useCheckUserQuery({
    enabled: isNetwork,
    staleTime: 60000,
    retry: false,
  });

  if (!isNetwork)
    return (
      <Result
        status="404"
        title="No Internet Connection"
        subTitle="Check your Internet Connection or your network."
        extra={
          <Button href="/" type="primary">
            Try Again
          </Button>
        }
      />
    );
  else {
    return <Router />;
  }
};

export { App };
