import { Button, FloatingLabel } from "flowbite-react"
import BaseTheme from "../../../components/BaseTheme";

const Login = () => {
    
    return (
      <BaseTheme center={true}>
        <form>
          <div className="flex flex-col gap-4">
            <FloatingLabel variant="outlined" label="Email" />
            <FloatingLabel variant="outlined" label="Password" />
            <Button >Login</Button>
          </div>
        </form>
      </BaseTheme>
    );
}

export default Login