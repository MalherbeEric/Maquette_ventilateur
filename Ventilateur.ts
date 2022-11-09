/* Blocks pour utilisation de la maquette du ventilateur
    ****** By Malherbe Eric - eric.malherbe@ac-orleans-tours.fr- ******/

//% weight=100 color=#94280d icon="\uf024" block="Ventilateur"

namespace Ventilateur {
    /**/

    export enum Buzzer_Action {
        //% block="Arrêt"
        Stop,
        //% block="Marche"
        Marche
    }

    export enum MotorDirection {
        //% block="Avancer"
        Forward,
        //% block="Reculer"
        Reverse
    }

    export enum Moteurs {
        //%blockId=Moteur_1
        //% block="moteur 1"
        Moteur1,
        //%blockId=Moteur_2
        //% block="moteur 2"
        Moteur2
    }

    /**
     * Marche ou arrêt du buzzer
     * @param buzzer 
     */
    //%blockId=Ventilateur_Buzzer
    //%block="Mettre le buzzer sur %buzzer"
    export function bufferOnOff(buzzer: Buzzer_Action): void {
        switch (buzzer) {
            case Buzzer_Action.Stop:
                pins.digitalWritePin(DigitalPin.P0, 0);
                break
            case Buzzer_Action.Marche:
                pins.analogWritePin(AnalogPin.P0, 1);
                break
        }
    }


    /**
         * Permettre d'arrêter les moteurs
         */
    //%blockId=Ventilateur_Moteur_All
    //% block="Arrêter les moteurs"
    export function Stop(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 0);
    }

    /**
         * Permettre de faire tourner les 2 moteurs vers l'avant
         *
         * @param vitesse  quelle vitesse des moteurs ?
         */
    //%blockId=Shield_Moteur_Forward
    //% block="Avancer à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100

    export function Avancer(vitesse: number): void {
        /*Convertir 0-100 to 0-1024 (approx)*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        pins.analogWritePin(AnalogPin.P1, OutputVal);
        pins.analogWritePin(AnalogPin.P2, OutputVal);
        pins.digitalWritePin(DigitalPin.P8, 1);
        pins.digitalWritePin(DigitalPin.P12, 1);
    }


    /**
         * Permettre de faire tourner les 2 moteurs vers l'arrière
         *
         * @param vitesse  quelle vitesse des moteurs ?
         */
    //%blockId=Shield_Moteur_Reverse
    //% block="Reculer à la vitesse %vitesse"
    //% vitesse.min=0 vitesse.max=100

    export function Reculer(vitesse: number): void {
        /*Convertir 0-100 to 0-1024 (approx)*/
        let OutputVal = Math.clamp(0, 100, vitesse) * 10;

        pins.analogWritePin(AnalogPin.P1, OutputVal);
        pins.analogWritePin(AnalogPin.P2, OutputVal);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 0);
    }
}


