package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Acheivement;
import com.example.demo.repository.AcheivementRepo;



@Service
public class AcheivementService {
    @Autowired AcheivementRepo acheivementRepo;

    public Acheivement saveAcheivement(Acheivement acheivement)
    {
        return acheivementRepo.save(acheivement);
    }
    public Acheivement findAcheivement(int id)
    {
        return acheivementRepo.findById(id).orElse(null);
    }
    public Acheivement upadAcheivement(Acheivement acheivement,int id)
    {
        Acheivement ach=acheivementRepo.findById(id).orElse(null);
        if(ach!=null)
        {
            ach.setAchievementName(acheivement.getAchievementName());
            ach.setArticle(acheivement.getArticle());
            return acheivementRepo.save(ach);
        }
        return null;
    }
    public void deleteach(int id)
    {
        Acheivement acheivement=acheivementRepo.findById(id).orElse(null);
        if(acheivement!=null)
        {
            acheivementRepo.deleteById(id);
        }
    }
    public List<Acheivement> getAll()
    {
        return acheivementRepo.findAll();
    }
}
