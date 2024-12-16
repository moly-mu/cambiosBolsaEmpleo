import { useState } from "react";
import NavbarI from "./NavbarI"; // Asegúrate de que la ruta sea correcta

const Cards = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [nuevoTrabajo, setNuevoTrabajo] = useState({ trabajo: "", experiencia: "" });

  const [idiomas, setIdiomas] = useState([]);
  const [nuevoIdioma, setNuevoIdioma] = useState("");

  const [educacion, setEducacion] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [referencias, setReferencias] = useState("");

  const [certificados, setCertificados] = useState([]);
  const [foto, setFoto] = useState(null);

  const [informacionPersonal, setInformacionPersonal] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    sexo: "",
    direccion: "",
    fechaNacimiento: "",
    telefono: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarChange = (status) => {
    setIsOpen(status);
  };

  const handleAddTrabajo = () => {
    if (nuevoTrabajo.trabajo && nuevoTrabajo.experiencia) {
      setTrabajos([...trabajos, nuevoTrabajo]);
      setNuevoTrabajo({ trabajo: "", experiencia: "" });
    }
  };

  const handleAddIdioma = () => {
    if (nuevoIdioma) {
      setIdiomas([...idiomas, nuevoIdioma]);
      setNuevoIdioma("");
    }
  };

  const handleAddCertificado = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCertificados([...certificados, file.name]);
    }
  };

  // Función para manejar los cambios en la información personal
  const handleChangeInfoPersonal = (e) => {
    const { name, value } = e.target;
    setInformacionPersonal({ ...informacionPersonal, [name]: value });
  };

  // Función para manejar la carga de la foto
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result); // Guardamos la foto en base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <NavbarI isOpen={isOpen} sidebarChange={handleSidebarChange} />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sobre mí */}
        <div className="col-span-1 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
          <textarea
            className="w-full h-56 border border-gray-300 p-3 rounded-md resize-none"
            placeholder="Escribe una breve descripción sobre ti..."
          ></textarea>
        </div>

        {/* Foto */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Foto</h2>
          <div
            className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden"
            style={{ width: "180px", height: "190px", margin: "0 auto" }}
          >
            {foto ? (
              <img src={foto} alt="Foto de perfil" className="object-cover w-full h-full" />
            ) : (
              <span className="text-gray-500">Subir Foto</span>
            )}
          </div>
          <input
            type="file"
            onChange={handleFotoChange}
            className="hidden"
            id="fotoInput"
          />
          <button
            onClick={() => document.getElementById("fotoInput").click()}
            className="w-full mt-4 bg-[#00102D] text-white p-2 rounded-md"
          >
            {foto ? "Cambiar Foto" : "Subir Foto"}
          </button>
        </div>

        {/* Información Profesional */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Información Profesional</h2>
          <div className="space-y-6">
            {/* Trabajos previos */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Trabajos Previos</h3>
              <div className="flex gap-4 mb-2">
                <input
                  type="text"
                  placeholder="Trabajo"
                  className="w-1/2 p-2 border rounded"
                  value={nuevoTrabajo.trabajo}
                  onChange={(e) => setNuevoTrabajo({ ...nuevoTrabajo, trabajo: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Experiencia (ej: 2 años)"
                  className="w-1/2 p-2 border rounded"
                  value={nuevoTrabajo.experiencia}
                  onChange={(e) => setNuevoTrabajo({ ...nuevoTrabajo, experiencia: e.target.value })}
                />
                <button
                  onClick={handleAddTrabajo}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  +
                </button>
              </div>
              <ul>{trabajos.map((t, i) => <li key={i}>{t.trabajo} - {t.experiencia}</li>)}</ul>
            </div>

            {/* Idiomas */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Idiomas</h3>
              <div className="flex gap-4 mb-2">
                <input
                  type="text"
                  placeholder="Idioma y nivel (ej: Inglés - Avanzado)"
                  className="w-full p-2 border rounded"
                  value={nuevoIdioma}
                  onChange={(e) => setNuevoIdioma(e.target.value)}
                />
                <button onClick={handleAddIdioma} className="bg-green-500 text-white p-2 rounded">
                  +
                </button>
              </div>
              <ul>{idiomas.map((idioma, i) => <li key={i}>{idioma}</li>)}</ul>
            </div>

            {/* Educación */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Educación</h3>
              <input
                type="text"
                placeholder="Nivel Educativo"
                className="w-full p-2 border rounded"
                value={educacion}
                onChange={(e) => setEducacion(e.target.value)}
              />
            </div>

            {/* Habilidades */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Habilidades Técnicas</h3>
              <input
                type="text"
                placeholder="Habilidad"
                className="w-full p-2 border rounded"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Referencias</h3>
              <input
                type="text"
                placeholder="Referencia"
                className="w-full p-2 border rounded"
                value={referencias}
                onChange={(e) => setReferencias(e.target.value)}
              />
            </div>

            {/* Certificados */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Certificados</h3>
              <input
                type="file"
                onChange={handleAddCertificado}
                className="w-full p-2 border rounded"
              />
              <ul className="mt-2">{certificados.map((c, i) => <li key={i}>{c}</li>)}</ul>
            </div>
          </div>
        </div>

        {/* Información Personal */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Información Personal</h2>
          <div className="space-y-4">
            {/* Nombre */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Nombre</h3>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="w-full p-2 border rounded"
                value={informacionPersonal.nombre}
                onChange={handleChangeInfoPersonal}
              />
            </div>

            {/* Apellidos */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Apellidos</h3>
              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                className="w-full p-2 border rounded"
                value={informacionPersonal.apellidos}
                onChange={handleChangeInfoPersonal}
              />
            </div>

            {/* Edad */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Edad</h3>
              <input
                type="number"
                name="edad"
                placeholder="Edad"
                className="w-full p-2 border rounded"
                value={informacionPersonal.edad}
                onChange={handleChangeInfoPersonal}
              />
            </div>

            {/* Sexo */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Sexo</h3>
              <select
                name="sexo"
                className="w-full p-2 border rounded"
                value={informacionPersonal.sexo}
                onChange={handleChangeInfoPersonal}
              >
                <option value="">Selecciona un sexo</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Dirección</h3>
              <input
                type="text"
                name="direccion"
                placeholder="Dirección"
                className="w-full p-2 border rounded"
                value={informacionPersonal.direccion}
                onChange={handleChangeInfoPersonal}
              />
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Teléfono</h3>
              <input
                type="text"
                name="telefono"
                placeholder="Número de teléfono"
                className="w-full p-2 border rounded"
                value={informacionPersonal.telefono}
                onChange={handleChangeInfoPersonal}
              />
            </div>
          </div>
        </div>

        {/* Botón de Guardar Cambios */}
        <div className="mt-6 flex justify-start w-full">
  <button
    className="w-full mt-4 bg-[#00102D] text-white p-2 rounded-md"
    onClick={() => alert("Cambios guardados con éxito")}
  >
    Guardar Cambios
  </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
