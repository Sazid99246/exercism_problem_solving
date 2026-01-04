# Define the color to value mapping
color_to_value = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9
}

# Define the tolerance mapping
tolerance_mapping = {
    'grey': '±0.05%',
    'violet': '±0.1%',
    'blue': '±0.25%',
    'green': '±0.5%',
    'brown': '±1%',
    'red': '±2%',
    'gold': '±5%',
    'silver': '±10%'
}

def resistor_label(colors):
    if len(colors) == 1:
        if colors[0].lower() == 'black':
            return "0 ohms"
        else:
            raise ValueError("Invalid color for a single-band resistor")
    
    if len(colors) not in [4, 5]:
        raise ValueError("Invalid number of color bands")
    
    # Get the values of the first two or three bands
    main_value = 0
    for i in range(2 if len(colors) == 4 else 3):
        color = colors[i].lower()
        if color not in color_to_value:
            raise ValueError(f"Invalid color: {color}")
        main_value = main_value * 10 + color_to_value[color]
    
    # Get the multiplier value
    multiplier_color = colors[-2].lower()
    if multiplier_color not in color_to_value:
        raise ValueError(f"Invalid color: {multiplier_color}")
    multiplier = color_to_value[multiplier_color]
    
    # Calculate the resistance value
    resistance_value = main_value * (10 ** multiplier)
    
    # Determine the unit (ohms, kiloohms, or megaohms)
    if resistance_value >= 1_000_000:
        resistance_str = f"{resistance_value / 1_000_000} megaohms"
    elif resistance_value >= 1000:
        resistance_str = f"{(resistance_value / 1_000):g} kiloohms"
    else:
        resistance_str = f"{resistance_value} ohms"

    # Get the tolerance value
    tolerance_color = colors[-1].lower()
    if tolerance_color not in tolerance_mapping:
        raise ValueError(f"Invalid color: {tolerance_color}")
    tolerance = tolerance_mapping[tolerance_color]
    
    return f"{resistance_str} {tolerance}"
