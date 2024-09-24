namespace ReelMotor {
    let rotations = 0;
    let startTime = 0;
    let motorFullSpeedRPM = 120;

    // Block to start the motor and begin tracking reel rotations
    //% block="start reel motor at speed $speed"
    export function startReelMotor(speed: number): void {
        rotations = 0;
        startTime = control.millis();
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed);
    }

    // Block to stop the reel motor
    //% block="stop reel motor"
    export function stopReelMotor(): void {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
    }

    // Block to get the number of rotations
    //% block="get reel rotations"
    export function getReelRotations(): number {
        let elapsedSeconds = (control.millis() - startTime) / 1000;
        let rpm = motorFullSpeedRPM * (Kitronik_Move_Motor.readSpeed() / 100);
        rotations = rpm / 60 * elapsedSeconds;
        return Math.floor(rotations);
    }
}
