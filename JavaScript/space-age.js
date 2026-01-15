export const EARTH_YEAR_SECONDS = 31557600;

export const ORBITAL_PERIODS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

export const age = (planet, seconds) => {
    if (!(planet in ORBITAL_PERIODS)) {
        throw new Error("not a planet");
    }

    const earthYears = seconds / EARTH_YEAR_SECONDS;
    const planetYears = earthYears / ORBITAL_PERIODS[planet];

    return Number(planetYears.toFixed(2));
};



export class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }

    onEarth() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.earth)).toFixed(2);
    }

    onMercury() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.mercury)).toFixed(2);
    }

    onVenus() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.venus)).toFixed(2);
    }

    onMars() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.mars)).toFixed(2);
    }

    onJupiter() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.jupiter)).toFixed(2);
    }

    onSaturn() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.saturn)).toFixed(2);
    }

    onUranus() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.uranus)).toFixed(2);
    }

    onNeptune() {
        return (this.seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS.neptune)).toFixed(2);
    }
}
