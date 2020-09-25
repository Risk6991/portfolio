module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["./*.html"],
    theme: {
        extend: {},
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "active"],
        translate: ["responsive", "hover", "focus", "motion-reduce", "active"],
    },
    plugins: [],
};
