// Contenido del portafolio. Para agregar trabajo nuevo, agrega una entrada aquí
// y coloca la imagen en assets/work (grande) y assets/thumb (miniatura ~640px).
window.PORTFOLIO = {
  sites: [
    { id: 'haften', name: 'Haften', url: 'https://haften-lyart.vercel.app/', tag: 'HVAC · BMS', desc: 'Distribución de equipos HVAC/R, sensores y sistemas BMS. Catálogo de marcas y contacto comercial.' },
    { id: 'bios', name: 'Laboratorios BIOS', url: 'https://www.bioslaboratorios.com/', tag: 'Salud', desc: 'Catálogo de estudios, sucursales, agenda de citas y buscador de perfiles.' },
    { id: 'geco', name: 'GECOMEX', url: 'https://www.geco-mex.com/', tag: 'Comercio exterior', desc: 'Soluciones integrales en comercio internacional, logística y aduanas.' },
    { id: 'ceah', name: 'CEAH Estructural', url: 'https://www.ceahestructural.com.mx/', tag: 'Industria', desc: 'Soluciones estructurales en fibra de vidrio FRP y láminas de PVC.' },
    { id: 'epc', name: 'Efficient Plastic Colors', url: 'https://efficientplasticolors.com/', tag: 'Industria', desc: 'Masterbatch, deslizantes y aditivos para la industria del plástico.' },
    { id: 'mixteca', name: 'Mixteca Foods', url: 'https://mixteca-web.vercel.app/', tag: 'Agroindustria', desc: 'Hortalizas y aromáticas en fresco desde Puebla para el mundo.' },
    { id: 'koi', name: 'Koi Arquitectura', url: 'https://www.koiarquitectura.com/', tag: 'Arquitectura', desc: 'Diseño, interiorismo y construcción en CDMX, Edomex y Puebla.' },
    { id: 'epiko', name: 'Epiko Monterrey', url: 'https://epiko.vercel.app/', tag: 'Eventos', desc: 'Todo para tu evento: mobiliario, decoración y experiencias.' },
    { id: 'urbanflip', name: 'Urban Flip', url: 'https://www.urban-flip.com/', tag: 'Inmobiliaria', desc: 'Compra y venta de propiedades con inventario disponible.' },
    { id: 'sermaq', name: 'SERMAQ', url: 'https://www.sermaqro.com/', tag: 'Maquinaria', desc: 'Renta y venta de maquinaria ligera para construcción en Querétaro.' },
    { id: 'nkmoh', name: 'Nikan Ka Moh Café', url: 'https://nkmohcafe.com/', tag: 'Café', desc: 'Café de especialidad de Zongolica, Veracruz. Mayoreo y menudeo.' },
    { id: 'ndt', name: 'NDT 360', url: 'https://ndt360.com.mx/', tag: 'Industria', desc: 'Venta de equipo industrial y servicios de pruebas no destructivas.' },
    { id: 'jemar', name: 'Distribuidora JEMAR', url: 'https://distribuidorajemar.com/', tag: 'Suministros', desc: 'Distribuidora de suministros industriales que mejora cualquier presupuesto.' },
    { id: 'element', name: 'Element Experiences', url: 'https://element-experiences.com/', tag: 'Turismo', desc: 'Experiencias para reconectar con la naturaleza.' }
  ],

  logos: [
    { img: 'bios-logo-18', name: 'Laboratorios BIOS', note: 'Salud' },
    { img: 'mixtk-07', name: 'MIXTK', note: 'Alimentos' },
    { img: 'foodie-07', name: 'Foodie Pack', note: 'Comida para oficina' },
    { img: 'mezcal-01', name: 'La Leyenda de los Perros', note: 'Mezcal' },
    { img: 'logo-doggyvan', name: 'Doggy Van', note: 'Spa canino móvil' },
    { img: 'logo-alba', name: 'Alba Cleanwork', note: 'Limpieza' },
    { img: 'logo-regreso', name: 'Regreso al Origen', note: 'Bienestar' },
    { img: 'logo-guadarrama', name: 'Guadarrama Jurídico', note: 'Despacho legal' },
    { img: 'logo-nezga', name: 'Nezga Arquitectos', note: 'Arquitectura' },
    { img: 'logo-verticlean', name: 'Verticlean', note: 'Mantenimiento' },
    { img: 'logo-alze', name: 'Grupo Alze', note: 'Insumos industriales' },
    { img: 'logo-smartstorage', name: 'Smart Storage', note: 'Bodegas' },
    { img: 'logo-yemashun', name: 'Yemashun', note: 'Inmobiliaria' },
    { img: 'logo-teachinghearts', name: 'Teaching Hearts', note: 'Educación' },
    { img: 'logo-maktrom', name: 'Maktrom', note: 'Industria' },
    { img: 'ndt-logo', name: 'NDT 360', note: 'Industria' },
    { img: 'jemar-logo', name: 'Distribuidora JEMAR', note: 'Suministros' },
    { img: 'sermaq-logo3', name: 'SERMAQ', note: 'Maquinaria' },
    { img: 'epc-logo', name: 'Efficient Plastic Colors', note: 'Industria' },
    { img: 'mixtk-08', name: 'MIXTK · negativo', note: 'Variación' },
    { img: 'foodie-11', name: 'Foodie Pack · sello', note: 'Variación' },
    { img: 'mezcal-03', name: 'Perros Mezcal · isotipo', note: 'Variación' },
    { img: 'sermaq-logo1', name: 'SERMAQ · positivo', note: 'Variación' }
  ],

  stationery: [
    { img: 'brochure-esic', name: 'ESIC · Brochure corporativo', kind: 'brochures' },
    { img: 'brochure-urban', name: 'Urban Arquitectos · Brochure corporativo', kind: 'brochures' },
    { img: 'brochure-hs', name: 'HS · Brochure corporativo', kind: 'brochures' },
    { img: 'brochure-oces', name: 'OCES · Brochure corporativo', kind: 'brochures' },
    { img: 'presentacion-synkto', name: 'Synkto · Presentación corporativa', kind: 'brochures' },
    { img: 'catalogo-epc', name: 'Efficient Plastic Colors · Catálogo Masterbatch', kind: 'catalogos' },
    { img: 'tarjeta-cosma', name: 'Grupo Cosma · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'tarjeta-kronova', name: 'Kronova · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'tarjeta-eterna', name: 'Eterna Freight · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'tarjeta-bayit', name: 'Bayit Inmobiliaria · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'tarjeta-synkto', name: 'Synkto · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'tarjeta-dotan', name: 'Dotan · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'tarjeta-puntocuak', name: 'Punto Cuak · Tarjeta de presentación', kind: 'tarjetas' },
    { img: 'bios-tarjeta', name: 'BIOS · Tarjeta Ruta Rosa', kind: 'tarjetas' },
    { img: 'firma-ceah', name: 'CEAH · Firma electrónica', kind: 'firmas' },
    { img: 'firma-eterna', name: 'Eterna Freight · Firma electrónica', kind: 'firmas' },
    { img: 'firma-kronova', name: 'Kronova · Firma electrónica', kind: 'firmas' },
    { img: 'firma-ndt', name: 'NDT 360 · Firma electrónica', kind: 'firmas' },
    { img: 'firma-cosma', name: 'Grupo Cosma · Firma electrónica', kind: 'firmas' },
    { img: 'firma-bayit', name: 'Bayit · Firma electrónica', kind: 'firmas' },
    { img: 'firma-synkto', name: 'Synkto · Firma electrónica', kind: 'firmas' },
    { img: 'bios-hoja-membretada', name: 'BIOS · Hoja membretada', kind: 'hojas' },
    { img: 'ndt-hoja', name: 'NDT 360 · Hoja membretada', kind: 'hojas' },
    { img: 'jemar-hoja', name: 'JEMAR · Hoja membretada', kind: 'hojas' },
    { img: 'mixteca-hoja', name: 'Mixteca · Hoja membretada', kind: 'hojas' },
    { img: 'sermaq-hoja', name: 'SERMAQ · Hoja membretada', kind: 'hojas' },
    { img: 'mcspine-hoja', name: 'MC Spine · Hoja membretada', kind: 'hojas' },
    { img: 'foodie-flyer', name: 'Foodie Pack · Flyer de lanzamiento', kind: 'flyers' },
    { img: 'lad-banner', name: 'LAD · Banner Tomografía', kind: 'flyers' },
    { img: 'bios-flyer-ventanilla', name: 'BIOS · Flyer ventanilla', kind: 'flyers' },
    { img: 'bios-flyer-vih', name: 'BIOS · Flyer pruebas VIH', kind: 'flyers' },
    { img: 'haften-flyer-expo', name: 'Haften · Flyer AHR Expo', kind: 'flyers' },
    { img: 'ndt-portada', name: 'NDT 360 · Portada redes', kind: 'portadas' },
    { img: 'epc-portada', name: 'EPC · Portada redes', kind: 'portadas' }
  ],

  social: [
    { img: 'bios-campana', name: 'BIOS · Octubre Rosa', brand: 'BIOS' },
    { img: 'haften-airmonitor', name: 'Haften · Air Monitor', brand: 'Haften' },
    { img: 'bios-rutarosa-02', name: 'BIOS · Ruta Rosa', brand: 'BIOS' },
    { img: 'haften-particle', name: 'Haften · Particles Plus', brand: 'Haften' },
    { img: 'denmar-flyer', name: 'Denmar Spa · Promoción', brand: 'Denmar Spa' },
    { img: 'bios-rutarosa-03', name: 'BIOS · Perfil hormonal', brand: 'BIOS' },
    { img: 'haften-diamadre', name: 'Haften · Día de las Madres', brand: 'Haften' },
    { img: 'bios-carrusel-01', name: 'BIOS · Carrusel educativo', brand: 'BIOS' },
    { img: 'haften-li-1', name: 'Haften · LinkedIn', brand: 'Haften' },
    { img: 'haften-li-2', name: 'Haften · Belimo', brand: 'Haften' },
    { img: 'haften-li-3', name: 'Haften · Seminario', brand: 'Haften' },
    { img: 'haften-li-4', name: 'Haften · Vaisala', brand: 'Haften' },
    { img: 'haften-li-6', name: 'Haften · Webinar', brand: 'Haften' },
    { img: 'haften-li-8', name: 'Haften · Cobertura', brand: 'Haften' }
  ],

  haften: {
    expo: ['expo-ahr-hall', 'expo-stand-feria', 'expo-ahr1', 'expo-ahr2', 'expo-equipo-hvac', 'expo-ahr3', 'expo-ahr4', 'expo-stand-tec', 'expo-ahr5', 'expo-entrada-ahr', 'expo-equipo-capt', 'expo-ahr6', 'expo-catalogos'],
    reels: ['reel-v2-segunda', 'reel-v5-quinta', 'reel-v8-octava'],
    social: ['haften-flyer-expo', 'haften-airmonitor', 'haften-particle', 'haften-diamadre', 'haften-li-1', 'haften-li-2', 'haften-li-3', 'haften-li-4', 'haften-li-5', 'haften-li-6', 'haften-li-8']
  },

  bios: {
    campaign: ['bios-campana', 'bios-rutarosa-02', 'bios-rutarosa-03', 'bios-carrusel-01', 'bios-tarjeta'],
    print: ['bios-hoja-membretada', 'bios-flyer-ventanilla', 'bios-flyer-vih', 'bios-tarjeta'],
    brand: ['bios-logo-18', 'bios-lab-hero', 'bios-lab-services', 'bios-lab-women', 'bios-lab-operations']
  },

  brands: [
    { img: 'dahua', name: 'Dahua Technology' },
    { img: 'haften', name: 'Haften' },
    { img: 'bios', name: 'Laboratorios BIOS' },
    { img: 'tritton', name: 'Tritton' },
    { img: 'xigma', name: 'Xigma Ingeniería' },
    { img: 'plussecure', name: 'Plus Secure' },
    { img: 'lad', name: 'Laboratorios LAD' },
    { img: 'efficient', name: 'Efficient Plastic Colors' }
  ],

  clients: ['Haften', 'Laboratorios BIOS', 'GECOMEX', 'CEAH', 'Efficient Plastic Colors', 'Mixteca Foods', 'Koi Arquitectura', 'Epiko', 'Urban Flip', 'SERMAQ', 'Nikan Ka Moh', 'NDT 360', 'JEMAR', 'Element', 'MIXTK', 'Foodie Pack', 'Denmar Spa', 'Perros Mezcal', 'Doggy Van', 'Alba Cleanwork', 'Nezga', 'Guadarrama Jurídico', 'Grupo Cosma', 'Kronova', 'Synkto', 'ESIC', 'Eterna Freight', 'Bayit']
};
