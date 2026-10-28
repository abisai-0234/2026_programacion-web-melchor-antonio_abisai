CREATE DATABASE IF NOT EXISTS cecyt9_local CHARACTER SET utf8mb4;
USE cecyt9_local;
 
-- ============================================================
-- 1. Talleres + asistencias (Parcial 1)
-- ============================================================
 
CREATE TABLE IF NOT EXISTS talleres (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  nombre VARCHAR(150) NOT NULL,
  instructor VARCHAR(150),
  fecha DATE NOT NULL,
  cupo INT DEFAULT 30,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
CREATE TABLE IF NOT EXISTS asistencias (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  taller_id CHAR(36),
  nombre_alumno VARCHAR(150) NOT NULL,
  boleta VARCHAR(20) NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (taller_id) REFERENCES talleres(id) ON DELETE CASCADE
);
 
-- Mismos 3 talleres de ejemplo que schema.sql (solo si la tabla está vacía).
INSERT INTO talleres (nombre, instructor, fecha, cupo)
SELECT * FROM (
  SELECT 'Introducción a Python', 'Ing. María López', DATE('2026-08-10'), 25
  UNION ALL SELECT 'Fundamentos de Redes', 'Ing. Carlos Ramírez', DATE('2026-08-12'), 30
  UNION ALL SELECT 'Diseño de Bases de Datos', 'Ing. Ana Torres', DATE('2026-08-14'), 20
) AS datos
WHERE NOT EXISTS (SELECT 1 FROM talleres);
 
-- ============================================================
-- 2. Usuarios (Parcial 2, semana 8) + administrador semilla
-- ============================================================
 
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL UNIQUE,
  contrasena_hash VARCHAR(100) NOT NULL,
  boleta VARCHAR(20) NOT NULL UNIQUE,
  rol VARCHAR(20) NOT NULL DEFAULT 'alumno'
);
 

INSERT INTO usuarios (nombre, correo, contrasena_hash, boleta, rol)
SELECT 'Admin Semilla', 'admin@cecyt9.ipn.mx',
       '$2a$10$uCuLGQ87xp5D4OO369.SsuOULnYNNSTQNs/LLdOmzZiv30gy4xVEy',
       '0000000000', 'admin'
WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE correo = 'admin@cecyt9.ipn.mx');
 
-- ============================================================
INSERT INTO asistencias (taller_id, nombre_alumno, boleta)
SELECT t.id, datos.nombre_alumno, datos.boleta
FROM talleres t
JOIN (
  SELECT 'Introducción a Python' AS taller, 'Admin Semilla' AS nombre_alumno, '0000000000' AS boleta
  UNION ALL SELECT 'Fundamentos de Redes', 'Admin Semilla', '0000000000'
  UNION ALL SELECT 'Introducción a Python', 'Alumno sin cuenta', '2026999999'
) AS datos ON datos.taller = t.nombre
WHERE NOT EXISTS (SELECT 1 FROM asistencias);