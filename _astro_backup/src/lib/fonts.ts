/**
 * Font self-hosted via Fontsource (dipakai oleh BaseLayout).
 * Jika paket @fontsource-variable/inter belum terinstal, fallback ke font sistem
 * agar build tetap berjalan.
 */
type FontLoader = {
  className: string;
};

function systemInter(): FontLoader {
  return {
    className: "font-sans",
  };
}

async function loadInter(): Promise<FontLoader> {
  try {
    const mod = await import("@fontsource-variable/inter");
    void mod;
    return { className: "font-sans" };
  } catch {
    return systemInter();
  }
}

export const Inter = await loadInter();
