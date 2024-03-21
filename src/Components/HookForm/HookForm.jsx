import useInputState from "../../Hooks/UseInputState";

const HookForm = () => {
  const nameState = useInputState("Rakib");

  const handleSubmit = (e) => {
    console.log("form data", name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default HookForm;
