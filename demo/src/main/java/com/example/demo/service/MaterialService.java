package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Materials;
import com.example.demo.repository.MaterialRepository;


@Service
public class MaterialService {
    @Autowired MaterialRepository materialRepository;

    public Materials savMaterials(Materials  materials)
    {
        return materialRepository.save(materials);
    }

    public Materials findMaterials(int id)
    {
        return materialRepository.findById(id).orElse(null);
    }

    public List<Materials> findMaterialsname(String materialname)
    {
        return materialRepository.findByMaterialsName(materialname);
    }

    public Materials updateMaterials(Materials materials,int id)
    {
        Materials mat=materialRepository.findById(id).orElse(materials);

        if(mat!=null)
        {
            mat.setMaterialsName(materials.getMaterialsName());
            mat.setMaterialsdescription(materials.getMaterialsDescription());
            mat.setMaterialArticle(materials.getMaterialArticle());
            return materialRepository.save(mat);
        }
        return null;
    }

    public void deletemateriall(int id)
    {
        Materials materials=materialRepository.findById(id).orElse(null);
        if(materials!=null)
        {
            materialRepository.delete(materials);
        }

    }

    public List<Materials> getAll()
    {
        return materialRepository.findAll();
    }
    
}
