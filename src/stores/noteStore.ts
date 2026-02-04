import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Note } from '../types';

interface NoteStore {
  notes: Note[];
  addNote: (machineryId: string, content: string, partName?: string) => void;
  updateNote: (id: string, content: string, partName?: string) => void;
  deleteNote: (id: string) => void;
  getNotesByMachinery: (machineryId: string) => Note[];
  getNotesByPart: (machineryId: string, partName: string) => Note[];
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set, get) => ({
      notes: [],
      addNote: (machineryId, content, partName) => {
        const newNote: Note = {
          id: Date.now().toString(),
          machineryId,
          content,
          timestamp: Date.now(),
          partName,
        };
        set((state) => ({ notes: [...state.notes, newNote] }));
      },
      updateNote: (id, content, partName) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, content, timestamp: Date.now(), ...(partName !== undefined && { partName }) }
              : note
          ),
        }));
      },
      deleteNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
      },
      getNotesByMachinery: (machineryId) => {
        return get().notes.filter((note) => note.machineryId === machineryId);
      },
      getNotesByPart: (machineryId, partName) => {
        return get().notes.filter(
          (note) => note.machineryId === machineryId && note.partName === partName
        );
      },
    }),
    {
      name: 'simvex-notes-storage',
    }
  )
);
