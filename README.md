# micro:bit Rotations

A compact Microsoft MakeCode extension for controlling a Kitronik :MOVE Motor and estimating reel or wheel rotations from elapsed time and the motor's reported speed.

## Blocks

- `start reel motor at speed`: starts forward motion and resets the estimate.
- `stop reel motor`: stops the motor.
- `get reel rotations`: returns the estimated whole-number rotation count.

## Install in MakeCode

1. Open <https://makecode.microbit.org/>.
2. Create a project and choose **Extensions**.
3. Paste `https://github.com/wcchun1234/microbit-rotations` into the search box.
4. Select the extension and ensure the Kitronik :MOVE Motor dependency is available.

## How the estimate works

The extension assumes a full-speed value of 120 RPM and scales it using the motor's reported percentage speed. It then multiplies RPM by elapsed running time. This is an open-loop estimate: battery voltage, load, wheel slip, and surface friction can all change the real rotation count.

For measured rather than estimated rotations, use a compatible encoder and calibrate against the physical build.

## Development

The block implementation is in `main.ts`. This early repository does not yet include complete MakeCode package metadata, tests, or a hardware calibration table.
