let pronouns = ["The", "Your", "Our", "My"];
let adjetives = ["Great", "Kind", "Horrible"];
let nouns = ["Monster", "Hero", "Dog"];
let extensions = [".com",".net", ".org", ".us"];

for(prn of pronouns){
	for(adj of adjetives){
		for(noun of nouns){
			for(ext of extensions){
				console.log(prn + adj + noun + ext);
				
			}
			
		}
		
	}
	
}