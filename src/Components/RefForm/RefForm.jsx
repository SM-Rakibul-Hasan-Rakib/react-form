const RefForm = () => {

  const handleSubmit = e =>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
