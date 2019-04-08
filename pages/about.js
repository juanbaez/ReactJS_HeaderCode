const OtroComponent = (props) => (
  <div>
    <h1>Hola Puto</h1>
    {props.children}
  </div>
)

const NuevoCompo = () => (
  <div>Nuevo componente</div>
)

const About = () => (
  <div>
    <OtroComponent>
      <NuevoCompo />
    </OtroComponent>
  </div>
)

export default About
