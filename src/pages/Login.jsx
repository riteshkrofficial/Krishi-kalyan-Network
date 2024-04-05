import loginImg from "../assets/Images/d142d8b7a2e493ab8e6523ec42a5c420.jpg"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Rooted in Tradition, Growing for Tomorrow"
      description2="Nurturing Nature, Feeding the World"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login