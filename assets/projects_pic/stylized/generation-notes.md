# Project illustration series

Created with the built-in ImageGen tool from the five existing project illustrations. The originals are retained unchanged. Output files are optimized WebP images for the website.

The generated illustrations preserve recognizable motifs from the originals and are decorative project covers rather than crystallographic reference data.

## Shared prompt

Use case: style-transfer. Create one wide 16:9 card illustration for a computational materials research website. Input image 1 is the edit target: preserve its scientific visual motif, arrangement and recognizable subject. Input image 2 is STYLE REFERENCE ONLY: match its pale off-white background, refined matte 3D spheres, clean thin rods where applicable, soft ambient shadows, restrained blue-grey/teal/ochre palette, lighting and polish; do not copy its lattice geometry. Use ample pale negative space and a complete centered subject, about 75% frame width, readable at 300x175 pixels. No glossy highlights, no neon, no noisy textures, no text, labels, legends, logos, watermark or equations. These are a matching series of five images. 

## Per-image instructions

### wb

Original: `../WB5-x.webp`

Output: `wb.webp`

For tungsten boride: preserve the ORIGINAL arrangement: a small-atom honeycomb mesh enclosing mostly single LARGE blue atom spheres at the CENTRES of its hexagonal cells, and in selected cells compact groups of exactly THREE ochre spheres. The large atoms sit inside the honeycomb cells, NOT at its vertices. The network vertices are tiny spheres with thin teal rods. Show only a clear lattice fragment with 3-4 central hexagon cells across. Keep the hexagonal network and the occupancy motif distinct. Do not replace the original with a generic large-atom honeycomb.

### high_entropy

Original: `../high_entropy.webp`

Output: `high_entropy.webp`

For high-entropy materials: preserve the mixed-species crystalline ball-and-stick array and its sense of spatial depth, with several atom sizes/species distributed in the lattice. Simplify the original into one coherent small 3D crystalline fragment, using five distinct restrained colors: slate navy, desaturated teal, pale blue-grey, muted lavender and soft ochre. Thin rods, rounded matte spheres, orderly perspective. Avoid the original neon and reflective surfaces and avoid a tangled random network.

### functional_materials

Original: `../functional_materials.webp`

Output: `functional_materials.webp`

For functional materials: preserve the original dense top-view atomic packing, larger grey metal spheres surrounded by smaller green spheres, and repeating compact three-atom orange triangular groups. Restyle those three species respectively in slate blue, muted teal and ochre. Use a finite fragment of the original planar packing with a pale margin, clear atom size contrast and subtle depth. Remove original Mo and B labels. Do not add bonds or networks absent from the target, do not turn this into the style reference honeycomb.

### catalysts

Original: `../catalysts.webp`

Output: `catalysts.webp`

For catalysts: preserve the target's arrangement of a ball-and-stick catalytic surface across the lower half, with large metal spheres and a fine surrounding network, and the small CO, NO, N2 and CO2 molecular motifs floating above it. Keep a pair of different atoms on the left for CO, another different pair for NO, a pair of identical atoms for N2 and a LINEAR three-atom motif for CO2 on the right; preserve a subtle curved left-to-right reaction arrow. Carbon muted blue, nitrogen muted teal, oxygen muted warm terracotta; catalytic surface large atoms ochre and smaller atoms slate blue-grey. Remove all chemical text labels. Keep the EXACT molecule sizes and relationships recognizable; no invented molecular species, no extra chemistry.

### computational_methods

Original: `../computational_methods.webp`

Output: `computational_methods.webp`

For computational methods: preserve the central faceted polyhedral node surrounded by a spatial network of spherical and smaller faceted nodes and curved connections. Refine the original dense network into a readable balanced central cluster with around 20 nodes and a few large outer nodes; use slate blue, muted teal, blue-grey and quiet lavender, with only tiny ochre accents. Keep the network abstract, retain some curved orbit-like links, use thin clean lines and matte dimensional nodes. Remove all background equations and circuit textures. Do not turn it into a crystalline lattice.

