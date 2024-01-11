import "./App.css";

// import DebouncedInputPrimitive from "src/components/primitives/DebouncedInput";
import SelectGenerics from "src/components/generics/Select";
// import DebouncedInputExtending from "src/components/extending/DebouncedInput";

function App() {
  return (
    <div className="wrapper">
      {/* <DebouncedInputPrimitive label="enter something" /> */}
      <SelectGenerics
        label="choose something"
        id="my-select"
        options={[123, 123]}
        selectedOption={124}
        onChange={console.log}
      />
      {/* <DebouncedInputExtending label="hello world" /> */}
    </div>
  );
}

export default App;
