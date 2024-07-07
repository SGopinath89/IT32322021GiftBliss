package vau.fas.dps.it.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vau.fas.dps.it.model.Item;
import vau.fas.dps.it.Repo.ItemRepository;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/items")
public class ItemController {

	@Autowired
	private ItemRepository itemRepository;
	
	@GetMapping
	public List<Item> getAllItems(){
		return itemRepository.findAll();
	}
}
