import useInputState from "../../Hooks/UseInputState";

const HookForm = () => {
  const emailState = useInputState('devrakibulhasanrakib@gmail.com')
  // const nameState = useInputState("Rakib");

  const handleSubmit = e => {
    console.log("form data", emailState.value );
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default HookForm;
