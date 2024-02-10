// Project model
export interface Project {
    project_id: number;
    project_name: string;
    sound_engineer: string;
    talent: string;
  }
  
// Cue model
export interface Cue {
    cue_id: number;
    project_id: number;
    cue_timestamp: string;
    talent: string;
    status: string;
}
  
  // Track model
export interface Track {
    track_id: number;
    project_id: number;
    talent: string;
    cue_id: number;
    track_location: string;
    start_time: string;
    end_time: string;
    type: string;
}
