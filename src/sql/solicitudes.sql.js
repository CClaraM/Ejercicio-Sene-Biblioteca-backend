export const INSERT_SOLICITUD = `
  INSERT INTO solicitudes_prestamo (id_usuario, id_libro, estado)
  VALUES (?, ?, 'pendiente')
`;

export const EXISTS_SOLICITUD_PENDIENTE = `
  SELECT 1
  FROM solicitudes_prestamo
  WHERE id_usuario = ? AND id_libro = ? AND estado = 'pendiente'
  LIMIT 1
`;

export const COUNT_EJEMPLARES_DISPONIBLES = `
  SELECT COUNT(*) AS disponibles
  FROM ejemplares_libro
  WHERE id_libro = ? AND disponibilidad = 'disponible'
`;

export const LIST_MIS_SOLICITUDES = `
  SELECT
    s.id_solicitud,
    s.estado,
    s.fecha_solicitud,
    l.titulo,
    s.observacion
  FROM solicitudes_prestamo s
  JOIN libros l ON l.id_libro = s.id_libro
  WHERE s.id_usuario = ?
  ORDER BY s.fecha_solicitud DESC, s.id_solicitud DESC
`;