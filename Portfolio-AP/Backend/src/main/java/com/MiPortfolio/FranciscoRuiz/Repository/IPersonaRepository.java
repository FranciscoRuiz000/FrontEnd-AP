package com.MiPortfolio.FranciscoRuiz.Repository;


import com.MiPortfolio.FranciscoRuiz.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {

}
