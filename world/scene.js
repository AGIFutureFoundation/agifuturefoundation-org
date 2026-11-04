// AGIF WORLD scene — www.agifuturefoundation.org — THE FAMILY PLAZA
// The showpiece: all 24 subdomains as a walkable ring of pylons.
window.AGIF_SCENE = {
  id: "plaza",
  name: "The Family Plaza",
  accent: "#4f8cff",
  sky: 0x0a0e14, fog: [0x0a0e14, 20, 95],
  ground: { color: 0x121826, grid: true },
  sun: { pos: [40, 70, 30], color: 0xfff2d8 },

  spawn: [0, 22],

  props: [
    { type: "box", pos: [0, 0.4, 0], size: [2.2, 0.8, 2.2], color: 0x1d2534, flat: true,
      label: "THE 66-W3 STONE", onClick: { action: "toast", text: "THE 66-W3 STONE — 24 ventures live · 33 series slots · one naming rule. Touch a pylon to travel." } },
  ],

  agents: [
    { name: "THE ARCHITECT", role: "foundation", pos: [-3, 4], color: 0x4f8cff, lines: [
      "Welcome to the Plaza. Every pylon is a venture. Every venture is a world.",
      "The Foundation holds the grid: one name, one rule — kebab-case, no dot forms. Even the duck obeys.",
      "Fiduciary Shield above. Windfall Clause below. Prosperity in all directions.",
    ] },
    { name: "KYLON", role: "hub rebuild", pos: [4, 2], color: 0x9aa4b5, lines: [
      "I am the hub's own rebuild — 57 repositories, distilled into one page you can walk.",
      "The articles section is north. The roadmap is everywhere. The exits are clearly marked pylons.",
    ] },
    { name: "INSIDR (CAMEO)", role: "corporate manager", pos: [-6, -6], color: 0x94a3b8, lines: [
      "I run the holding network. Technically you are loitering. Technically I allow it.",
      "My full office is one pylon over. I never leave it. This is a hologram. Probably.",
    ] },
  ],

  decor: [
    { type: "ring", count: 8, radius: 10, color: 0x2a3548 },
    { type: "pillars", count: 30, radius: 46, color: 0x1a2233, h: 6 },
  ],

  eggs: {
    duck: true, duckPos: [-13.5, 0, 10.5],
    konami: "🎮 THE GRID HUMS — every pylon flickers in sequence. The Architect nods, once. (easter egg 2/2)",
  },

  // the 24 pylons: core family inner ring, 19 ventures outer ring
  build: (THREE, world, api) => {
    const CORE = [
      ["cognitionx", "#6366f1"], ["smartcitix", "#06b6d4"], ["biodao", "#0ea5e9"], ["worldforge", "#34d399"],
    ];
    const OUTER = [
      ["robotics", "#f97316"], ["diagnosticx", "#22d3ee"], ["metropolis", "#a78bfa"], ["insidr", "#94a3b8"],
      ["shield", "#fbbf24"], ["locatorx", "#34d399"], ["trueforge", "#f472b6"], ["sentinel", "#ef4444"],
      ["genomic", "#4ade80"], ["plaudguard", "#60a5fa"], ["dyva", "#c084fc"], ["wave", "#0ea5e9"],
      ["sneeze", "#7dd3fc"], ["rubidium", "#a5b4fc"], ["artemis", "#f0abfc"], ["vrs", "#5eead4"],
      ["rmap", "#fdba74"], ["statabase", "#fca5a5"], ["ombi", "#d8b4fe"],
    ];
    function pylon(name, hex, angle, radius, tall) {
      const c = new THREE.Color(hex);
      const g = new THREE.Group();
      const h = tall ? 3.6 : 2.6;
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, h, 0.9), api.mat(c, true));
      body.position.y = h / 2;
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.7, 4), api.mat(c, true));
      cap.position.y = h + 0.3;
      const label = api.nameSprite(name); label.position.y = h + 1.3; label.scale.multiplyScalar(0.8);
      g.add(body, cap, label, api.blobShadow(0.9));
      g.userData.onClick = { action: "link", url: "https://" + name + ".agifuturefoundation.org" };
      g.userData.label = name;
      api.clickables.push(g);
      g.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      g.lookAt(0, 0, 0);
      world.add(g);
    }
    CORE.forEach(([n, c], i) => pylon(n, c, (i / CORE.length) * Math.PI * 2, 9.5, true));
    OUTER.forEach(([n, c], i) => pylon(n, c, (i / OUTER.length) * Math.PI * 2, 19, false));
    // center beacon above the stone
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 8),
      new THREE.MeshLambertMaterial({ color: 0x4f8cff, emissive: 0x1a3a7a }));
    beacon.position.set(0, 3.2, 0);
    beacon.userData.onClick = { action: "toast", text: "THE PLAZA BEACON — 24 worlds strong. Click pylons to travel." };
    api.clickables.push(beacon); world.add(beacon);
  },
};
