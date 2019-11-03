export class SkillData {
    relevance: number;
    name: string;
    rating: string;
    src: string;
    content: string[];

    static comparer( s1 : SkillData, s2 : SkillData) : number{
        const n = s1.relevance - s2.relevance;
        if (n != 0) return n; 
        return s2.rating.localeCompare(s1.rating);
      }
}