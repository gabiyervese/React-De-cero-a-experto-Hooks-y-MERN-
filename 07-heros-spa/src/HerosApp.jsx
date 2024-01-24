import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

function HerosApp() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default HerosApp;
