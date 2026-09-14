import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase = createClient(
    'https://kjpkydoyzarbmezzbuud.supabase.co',
    'sb_publishable_7t4nziN_YJA6tuhujZrbRg_8VKNk48s'
  )

  obtenerPeliculas(){
    return this.supabase.from('Cartelera').select('*')
  }
}
