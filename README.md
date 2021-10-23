# Signalera - current work in progress
Easy to use in app notification component


## Example usage

Install the package with

`npm install signalera` or `yarn add signalera`

Import the hook `useSignalera` and the Provider `Signalera` from `signalera`.

`import { useSignalera, Signalera } from "signalera";`

Wrap your app with desired scope of the context. In this example we have our context wrapping the entire app.
```
function App() {
  return (
    <Signalera>
      <div className="App">
        <Button />
      </div>
    </Signalera>
  );
}
```
Inside a functional component we can get the `addSignal` function from our hook `useSignalera`.
`title` is the only required key to include in the object we pass the function. More about this in a bit.

```
const Button: React.FC<Props> = () => {
  const { addSignal } = useSignalera();
  return (
    <button
      onClick={() =>
        addSignal({
          title: "A nice new title",
          body: "A rich and luxurious body text",
        })
      }
    >
      Add signal
    </button>
  );
};
```
