export interface FaceRecord {
  id: string;
  passengerId: string;
  faceEmbedding: number[];
  confidenceScore: number;
  registeredAt: string;
}